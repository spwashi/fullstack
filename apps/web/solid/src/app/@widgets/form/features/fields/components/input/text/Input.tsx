import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";
import { FormContext } from "@widgets/form/context/context";
import { useFormItem } from "../../../hooks/useFormItem";

type InputParams = { formKey?: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Div {
  key: number;
  children: any;
  value: any;
  update: () => void;
}

function InnerValue({ children, update }: Div) {
  useEffect(() => {
    // update();
  }, [update]);
  return <div className="value">{children}</div>;
}
export function Value({
  formKey,
  children,
  value,
}: {
  formKey: string;
  value?: any;
  children?: any;
}) {
  const form = useContext(FormContext);
  const [{ localValue }, update] = useFormItem(
    formKey ?? null,
    undefined,
    true
  );

  useEffect(() => {
    const v = localValue;
    if (v !== value) update(v);
  }, [update, localValue, form.key]);

  const doUpdate = useCallback(() => {
    update(localValue);
  }, [localValue]);

  useMemo(() => `input--${Math.random()}`.replace(".", ""), []);

  return (
    <div className="input-wrapper">
      <InnerValue key={form.key} value={value} update={doUpdate}>
        {children}
      </InnerValue>
    </div>
  );
}

function useRichTextEditor(
  params: InputParams,
  [localValue, update]: [EditorState | string, (v: string) => void]
) {
  const { formKey, name, value, type, ...rest } = params;
  const key = useMemo(() => Date.now(), []);
  const [editorState, setEditorState] = useState(() => {
    try {
      const prev = JSON.parse("" + (value ?? ""));
      return EditorState.createWithContent(convertFromRaw(prev));
    } catch (e: any) {
      if (`${e.message}`.indexOf("Unexpected end") < 0) {
        console.log(e);
      }
    }
    return EditorState.createEmpty();
  });
  useEffect(() => {
    const curr = editorState.getCurrentContent();
    if (type !== "rich") return;
    update(
      (type === "rich"
        ? JSON.stringify(convertToRaw(curr))
        : localValue) as string
    );
  }, [editorState]);

  if (type !== "rich") return null;
  return (
    <>
      <Editor
        editorKey={key + ""}
        placeholder={rest.placeholder}
        onChange={setEditorState}
        editorState={editorState}
      />
    </>
  );
}

export function Input(params: InputParams) {
  const { formKey, name, ...rest } = params;
  const [{ value }, update] = useFormItem(formKey ?? name ?? null);
  const { type = "text" } = rest;
  const editor = useRichTextEditor(params, [value, update]);

  return (
    <React.Fragment>
      {type === "rich" ? (
        editor
      ) : (
        <input
          {...rest}
          type={type}
          name={name}
          value={value ?? ""}
          onChange={(e) => update(e.target.value)}
        />
      )}
    </React.Fragment>
  );
}

import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { ScenesAdminNavigation } from "@features/scenes/behaviors/admin/components/navigation/ScenesAdminNavigation";
import { ScenesRequisiteFeatures } from "@features/scenes/behaviors/admin/components/features/ScenesRequisiteFeatures";
import { ScenesAdminRoutes } from "@features/scenes/behaviors/admin/components/routes/ScenesAdminRoutes";
import { featureIds } from "@identities/features/ids";

export function ScenesControlPanel() {
  return (
    <FeatureRequirement name={featureIds.scene.scenes}>
      <ScenesRequisiteFeatures />
      <ScenesAdminNavigation />
      <ScenesAdminRoutes />
    </FeatureRequirement>
  );
}

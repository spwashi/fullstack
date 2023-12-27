const OPEN_CONCEPTUAL  = '<';
const CLOSE_CONCEPTUAL = '>';
const OPEN_STRUCTURAL  = '{';
const CLOSE_STRUCTURAL = '}';
const OPEN_ESSENTIAL   = '[';
const CLOSE_ESSENTIAL  = ']';
const OPEN_LOCATIONAL  = '(';
const CLOSE_LOCATIONAL = ')';

export const containerDelimiterMap =
               {
                 [OPEN_CONCEPTUAL]: CLOSE_CONCEPTUAL,
                 [OPEN_LOCATIONAL]: CLOSE_LOCATIONAL,
                 [OPEN_ESSENTIAL]:  CLOSE_ESSENTIAL,
                 [OPEN_STRUCTURAL]: CLOSE_STRUCTURAL,
               };
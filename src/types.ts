export type TimepickerData = {
  text: string;
  time_from: number;
  time_to?: number;
  isPrimary?: boolean;
  isCurrentTime: boolean;
  errors: string[];
  refresh?: string;
  variableName?: string;
  variableValue?: string;
};
export interface SimpleOptions {
  displayStyle: string;
  displayButtonsHorizontal: boolean;
  displayIncludeRefreshParameter: boolean
  timeFromOption: string;
  timeToOption?: string;
  buttonTextOption?: string;
  primaryFieldOption?: string;
  primaryFieldValueOption?: string;
  variableNameOption?: string;
  variableValueFieldOption?: string;
}

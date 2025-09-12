import Bluebird from 'bluebird';
const Promise = Bluebird;

export type ProblemSeverity = 'warning' | 'error';

export interface ITestResult {
  description: {
    short: string;
    long?: string;
  };
  severity: ProblemSeverity;
  automaticFix?: () => Promise<void>;
}

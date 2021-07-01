'use-strict';

import chalk from 'chalk';
import { Spinner } from 'clui';

const createSpinner = message => {
  const spinner = new Spinner(`  %s ${message}`);
}
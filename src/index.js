import {log,tester} from './logger';

import './styles/main.css';
import './styles/main.scss';


log.success(
	'This Is a success in bundle.js'
);

log.warning(
	'This Is a warning in bundle.js'
);

log.error(
	'This Is a error in bundle.js'
);

tester(
	'This Is a test in bundle.js'
);
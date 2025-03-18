
import { total }      from "../kolibri-dist-0.9.10/kolibri/util/test.js";
import { versionInfo} from "../kolibri-dist-0.9.10/kolibri/version.js";


import './todo/todoTest.js'
import './person/personTest.js'

import '../kolibri-dist-0.9.10/kolibri/allKolibriTestsSuite.js';

total.onChange( value => document.getElementById('grossTotal').textContent = "" + value + " tests done.");

document.querySelector("footer").textContent = "Built with Kolibri " + versionInfo;


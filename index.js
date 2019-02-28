import { version } from 'deps-version';

export function dependencyVersion(){
    return "dependency-version " + version();
}

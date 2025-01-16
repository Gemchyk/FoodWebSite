/*Just a script because I don't know why, but webpack doesn't work without it*/

import {exec} from 'child_process';

function pythonStart(){
    if (typeof window === 'undefined'){
        function startPythonScript() {
            const { exec } = require('child_process'); // Убедитесь, что модуль подключен
            exec('python message.py', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Ошибка выполнения скрипта: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`Ошибка stderr: ${stderr}`);
                    return;
                }
                // Вы можете игнорировать stdout, если вам не нужно выводить результат
                console.log('Python скрипт выполнен');
            });
        }
        
        startPythonScript();
    }
}

export default pythonStart;
import {exec} from 'child_process';


export const pythonStart = exec('python message.py', (error, stdout, stderr) => {
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


from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)
@app.route('/message', methods=['POST'])


def send_message():
    try:
        # Запуск целевого скрипта (например, script.py)
        result = subprocess.run(['python', 'message.py'], capture_output=True, text=True)
        return jsonify({
            'success': True,
            'output': result.stdout,
            'error': result.stderr
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    # Запустите сервер на localhost, порт 5000
    app.run(host='0.0.0.0', port=5000)
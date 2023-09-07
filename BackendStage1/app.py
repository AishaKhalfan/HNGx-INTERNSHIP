from flask import Flask, request, jsonify
import datetime
import os
import pytz

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def get_infor():
    """
    This endpoint should take two GET request query parameters
    return specific information in JSON format
    """
    slack_name = 'AishaKhalifan'
    track = 'Backend'

    # lets get the current day and time in UTC
    utc_time = datetime.datetime.now(pytz.utc)
    current_day = datetime.datetime.now().strftime('%A')

    # GitHub URL of the file being run
    file_url = "https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/BackendStage1/app.py"

    # GitHub URL of the full source code
    full_source_code = "https://github.com/AishaKhalfan/HNGx-INTERNSHIP"

    # Calculate UTC time with validation of +/-2 hours
    utc_offset = utc_time.utcoffset().total_seconds() / 3600  # Convert offset to hours
    is_valid_utc = abs(utc_offset) <= 2

    if slack_name and track and is_valid_utc:
        response = {
            'Slack name': slack_name,
            'Current day of the week': current_day,
            'Current UTC time': str(utc_time),
            'Track': track,
            'GitHub URL of the file being run': file_url,
            'GitHub URL of the full source code': full_source_code,
            'Status Code': 'Success'
        }
        return jsonify(response), 200
    else:
        return jsonify({'error': 'Invalid input parameters or UTC offset out of range'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)



import requests
import json
import datetime

def get_endpoint(slack_name, track):
  """Gets the current day of the week, current UTC time, and GitHub URLs for the file being run and the full source code."""

  # Validate the UTC time.
  now = datetime.datetime.utcnow()
  utc_time = now.strftime("%H:%M:%S")
  if now - datetime.timedelta(hours=2) <= datetime.datetime.strptime(utc_time, "%H:%M:%S") <= now + datetime.timedelta(hours=2):
    pass
  else:
    raise ValueError("The UTC time must be within +/- 2 hours of the current time.")

  # Get the GitHub URL of the file being run.
  file_url = requests.get("https://api.github.com/repos/bard/bard/commits/HEAD").json()["url"]

  # Get the GitHub URL of the full source code.
  source_code_url = requests.get("https://api.github.com/repos/bard/bard/contents/endpoint.py").json()["url"]

  # Return the information in JSON format.
  return json.dumps({
      "slack_name": slack_name,
      "day_of_week": now.strftime("%A"),
      "utc_time": utc_time,
      "track": track,
      "file_url": file_url,
      "source_code_url": source_code_url
  })

if __name__ == "__main__":
  slack_name = "Aisha Khalifan"
  track = "Backend General"

  response = get_endpoint(slack_name, track)i

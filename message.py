from telethon import TelegramClient;
import json;

import sys;

print("konec")


api_id = 26041803
api_hash = "4fbbbe9281d1801a17bc576db09b17c0"
client = TelegramClient('my_session', api_id, api_hash)



with open("db.json", "r") as file:
        db_data = json.load(file)




data = db_data["requests"][-1]

name = data["userName"]
nickname = data["nickName"]
# if data["nickName"].startswith('+3'):
#     nickname = int(data["nickName"][1:])
# elif data["nickName"].startswith('0'):
#     nickname = int(data["nickName"])
# else:
#     nickname = data["nickName"]

people = data["numOfPeople"]
time = data["Time"]
date = data["Date"]


message = "Hello, " + name + ", you have booked table for " + people + " people on " + date + ", at " + time





async def main():   
    await client.send_message(nickname, message)


with client:
    client.loop.run_until_complete(main())





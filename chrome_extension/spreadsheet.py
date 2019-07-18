import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json
# from model import Website

scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)

sheet = client.open("list of websites").sheet1

websites = sheet.get_all_records()

cell = sheet.find("http://freewestmedia.com")
Website_line = (cell.row)
Website_Info = sheet.row_values(Website_line)
# print(Website_Info[0])
Website = json.dumps(websites)


# print(Website)
with open('websites.txt', 'w') as outfile:
    json.dump(websites, outfile)
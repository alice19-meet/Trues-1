import gspread
from oauth2client.service_account import ServiceAccountCredentials
# import pprint 
# from parse import *
from model import Website

# !! lets python access google sheets !!
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)

sheet = client.open("list of websites").sheet1

# !! list of all of the website from the sheets !!
websites = sheet.get_all_records()

# pp = pprint.PrettyPrinter()
# pp.pprint(websites)
# !! finds a specific website !!
cell = sheet.find("http://freewestmedia.com")
Website_line = (cell.row)
Website_Info = sheet.row_values(Website_line)
# print(Website_Info[2])
for i in range(len(websites)):   
    Website(Website_Info[0], Website_Info[2], Website_Info[3], Website_Info[4])



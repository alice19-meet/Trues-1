from model import *

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import gspread
from oauth2client.service_account import ServiceAccountCredentials
# import pprint 
# from parse import *
from model import *

engine = create_engine('sqlite:///lecture.db')
Base.metadata.create_all(engine)
DBSession = sessionmaker(bind=engine)
session = DBSession()
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)
sheet = client.open("list of websites").sheet1
# Write your functions to interact with the database here :

def create_website(name, media_bias_link, category, bias,link):
	website_object= Website(
		name = name,
		media_bias_link= media_bias_link,
		category = category,
		bias = bias,
		link = link
		)
	session.add(website_object)
	session.commit()

# !! list of all of the website from the sheets !!
websites = sheet.get_all_records()

# pp = pprint.PrettyPrinter()
# pp.pprint(websites)
# !! finds a specific website !!
# print(websites[0])
# cell = sheet.find("http://freewestmedia.com")
# Website_line = (cell.row) 
# print(Website_line)
# Website_Info = sheet.row_values()
# print(Website_Info)
# print(len(websites))
for i in range (89, len(websites)):
	Website_Info = sheet.row_values(i+1)
	create_website(Website_Info[0], Website_Info[1], Website_Info[2], Website_Info[3], Website_Info[4])

def delete_website(name):
	cell = sheet.find(name)
	Website_line = (cell.row)
	session.query(Website).filter_by(id= id).delete()
	session.commit()
def get_website(link):
	cell = sheet.find(link)
	Website_line = (cell.row)
	print(Website_line)
	a=session.query(Website).filter_by(id=Website_line).first()
	print(a)
	return a

# get_website("http://freewestmedia.com")
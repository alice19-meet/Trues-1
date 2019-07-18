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

# Write your functions to interact with the database here :

def create_website(name, category, bias,link):
	website_object= Website(
		name = name,
		category = category,
		bias = bias,
		link = link
		)
	session.add(website_object)
	session.commit()

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
print(websites[0])
cell = sheet.find("http://freewestmedia.com")
Website_line = (cell.row) 
print(Website_line)
Website_Info = sheet.row_values(Website_line)
# print(Website_Info[2])
print(len(websites))
# for i in range (len(websites)):
# 	create_website(Website_Info[0], Website_Info[2], Website_Info[3], Website_Info[4])

def update_product(id, price, rating):
  #TODO: complete the functions (you will need to change the function's inputs)
	product_object = session.query(Products).filter_by(id=id).first()
	if price <300:		
		product_object.price = price
		product_object.rating = rating
		session.commit()
	else:
		print("The number you entered is too high")

def delete_product(id):
	session.query(Products).filter_by(id= id).delete()
	session.commit()
# delete_product(1)
def get_product(type_of_item):
	a=session.query(Products).filter_by(type_of_item=type_of_item).first()
	return a


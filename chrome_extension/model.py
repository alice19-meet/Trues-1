from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import create_engine
from spreadsheet import Website_Info

Base = declarative_base()

class Website(Base):
    __tablename__ = "websites"
    id = Column(Integer, primary_key = True)
    name = Column(String)
    category = Column(String)
    bias = Column(Integer)
    link = Column(String)


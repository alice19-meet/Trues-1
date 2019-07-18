from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import create_engine

Base = declarative_base()

class Website(Base):
    __tablename__ = "websites"
    id = Column(Integer, primary_key = True)
    name = Column(String)
    media_bias_link = Column(String)
    category = Column(String)
    bias = Column(Integer)
    link = Column(String)
import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py



from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Create engine and base
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base = declarative_base()

# Define model classes with docstrings describing each table
class Manufacturer(Base):
    """
    description: Table of car part manufacturers
    """
    __tablename__ = 'manufacturers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    country = Column(String, nullable=True)

class CarModel(Base):
    """
    description: Table of car models
    """
    __tablename__ = 'car_models'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(Integer, ForeignKey('manufacturers.id'))

class PartCategory(Base):
    """
    description: Table of part categories
    """
    __tablename__ = 'part_categories'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=True)

class Part(Base):
    """
    description: Table of car parts
    """
    __tablename__ = 'parts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    category_id = Column(Integer, ForeignKey('part_categories.id'))
    car_model_id = Column(Integer, ForeignKey('car_models.id'))
    price = Column(Float, nullable=True)

class Supplier(Base):
    """
    description: Table of suppliers
    """
    __tablename__ = 'suppliers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=True)

class Inventory(Base):
    """
    description: Table of inventory
    """
    __tablename__ = 'inventory'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    part_id = Column(Integer, ForeignKey('parts.id'))
    quantity = Column(Integer, nullable=True)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'))

class Customer(Base):
    """
    description: Table of customers
    """
    __tablename__ = 'customers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)

class Order(Base):
    """
    description: Table of orders
    """
    __tablename__ = 'orders'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    order_date = Column(DateTime, default=datetime.datetime.utcnow)

class OrderLine(Base):
    """
    description: Table of order lines
    """
    __tablename__ = 'order_lines'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'))
    part_id = Column(Integer, ForeignKey('parts.id'))
    quantity = Column(Integer, nullable=True)

class Employee(Base):
    """
    description: Table of employees
    """
    __tablename__ = 'employees'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    position = Column(String, nullable=True)

class Shipment(Base):
    """
    description: Table of shipments
    """
    __tablename__ = 'shipments'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    order_id = Column(Integer, ForeignKey('orders.id'))

class Warehouse(Base):
    """
    description: Table of warehouses
    """
    __tablename__ = 'warehouses'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String, nullable=False)
    capacity = Column(Integer, nullable=True)

# Create all tables
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
manufacturers = [
    Manufacturer(name="Toyota", country="Japan"),
    Manufacturer(name="Ford", country="USA"),
]

car_models = [
    CarModel(name="Corolla", manufacturer_id=1),
    CarModel(name="Mustang", manufacturer_id=2),
]

part_categories = [
    PartCategory(name="Engine"),
    PartCategory(name="Transmission"),
]

parts = [
    Part(name="V8 Engine", category_id=1, car_model_id=2, price=5000.00),
    Part(name="Spark Plug", category_id=1, car_model_id=1, price=10.50),
]

suppliers = [
    Supplier(name="Automotive Supplies Inc.", address="123 Motorway Blvd"),
    Supplier(name="Parts Unlimited", address="456 Gear St"),
]

inventory = [
    Inventory(part_id=1, quantity=20, supplier_id=1),
    Inventory(part_id=2, quantity=100, supplier_id=2),
]

customers = [
    Customer(name="John Doe", email="johndoe@example.com"),
    Customer(name="Jane Smith", email="janesmith@example.com"),
]

orders = [
    Order(customer_id=1),
    Order(customer_id=2),
]

order_lines = [
    OrderLine(order_id=1, part_id=1, quantity=2),
    OrderLine(order_id=2, part_id=2, quantity=10),
]

employees = [
    Employee(name="Alice Johnson", position="Sales Manager"),
    Employee(name="Bob Lee", position="Warehouse Supervisor"),
]

shipments = [
    Shipment(date=datetime.datetime(2023, 10, 25), order_id=1),
    Shipment(date=datetime.datetime(2023, 10, 26), order_id=2),
]

warehouses = [
    Warehouse(location="East Warehouse", capacity=1000),
    Warehouse(location="West Warehouse", capacity=2000),
]

# Adding to session
session.add_all(manufacturers + car_models + part_categories + parts + suppliers +
                inventory + customers + orders + order_lines + employees +
                shipments + warehouses)

# Commit session
session.commit()

# Close session
session.close()

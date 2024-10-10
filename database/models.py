# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 10, 2024 12:28:10
# Database: sqlite:////tmp/tmp.dr6TwyAtzV/cp2/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Table of customers
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    OrderList : Mapped[List["Order"]] = relationship(back_populates="customer")



class Employee(SAFRSBaseX, Base):
    """
    description: Table of employees
    """
    __tablename__ = 'employees'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    position = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Manufacturer(SAFRSBaseX, Base):
    """
    description: Table of car part manufacturers
    """
    __tablename__ = 'manufacturers'
    _s_collection_name = 'Manufacturer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CarModelList : Mapped[List["CarModel"]] = relationship(back_populates="manufacturer")



class PartCategory(SAFRSBaseX, Base):
    """
    description: Table of part categories
    """
    __tablename__ = 'part_categories'
    _s_collection_name = 'PartCategory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PartList : Mapped[List["Part"]] = relationship(back_populates="category")



class Supplier(SAFRSBaseX, Base):
    """
    description: Table of suppliers
    """
    __tablename__ = 'suppliers'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="supplier")



class Warehouse(SAFRSBaseX, Base):
    """
    description: Table of warehouses
    """
    __tablename__ = 'warehouses'
    _s_collection_name = 'Warehouse'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)
    capacity = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)



class CarModel(SAFRSBaseX, Base):
    """
    description: Table of car models
    """
    __tablename__ = 'car_models'
    _s_collection_name = 'CarModel'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(ForeignKey('manufacturers.id'))

    # parent relationships (access parent)
    manufacturer : Mapped["Manufacturer"] = relationship(back_populates=("CarModelList"))

    # child relationships (access children)
    PartList : Mapped[List["Part"]] = relationship(back_populates="car_model")



class Order(SAFRSBaseX, Base):
    """
    description: Table of orders
    """
    __tablename__ = 'orders'
    _s_collection_name = 'Order'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'))
    order_date = Column(DateTime)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("OrderList"))

    # child relationships (access children)
    ShipmentList : Mapped[List["Shipment"]] = relationship(back_populates="order")
    OrderLineList : Mapped[List["OrderLine"]] = relationship(back_populates="order")



class Part(SAFRSBaseX, Base):
    """
    description: Table of car parts
    """
    __tablename__ = 'parts'
    _s_collection_name = 'Part'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    category_id = Column(ForeignKey('part_categories.id'))
    car_model_id = Column(ForeignKey('car_models.id'))
    price = Column(Float)

    # parent relationships (access parent)
    car_model : Mapped["CarModel"] = relationship(back_populates=("PartList"))
    category : Mapped["PartCategory"] = relationship(back_populates=("PartList"))

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="part")
    OrderLineList : Mapped[List["OrderLine"]] = relationship(back_populates="part")



class Shipment(SAFRSBaseX, Base):
    """
    description: Table of shipments
    """
    __tablename__ = 'shipments'
    _s_collection_name = 'Shipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    date = Column(DateTime)
    order_id = Column(ForeignKey('orders.id'))

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("ShipmentList"))

    # child relationships (access children)



class Inventory(SAFRSBaseX, Base):
    """
    description: Table of inventory
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    part_id = Column(ForeignKey('parts.id'))
    quantity = Column(Integer)
    supplier_id = Column(ForeignKey('suppliers.id'))

    # parent relationships (access parent)
    part : Mapped["Part"] = relationship(back_populates=("InventoryList"))
    supplier : Mapped["Supplier"] = relationship(back_populates=("InventoryList"))

    # child relationships (access children)



class OrderLine(SAFRSBaseX, Base):
    """
    description: Table of order lines
    """
    __tablename__ = 'order_lines'
    _s_collection_name = 'OrderLine'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('orders.id'))
    part_id = Column(ForeignKey('parts.id'))
    quantity = Column(Integer)

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("OrderLineList"))
    part : Mapped["Part"] = relationship(back_populates=("OrderLineList"))

    # child relationships (access children)

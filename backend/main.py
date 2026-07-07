from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for our list
db_items = ["Apples", "Bread", "Milk", "Eggs"]

# Define the structure of the data we expect from React
class Item(BaseModel):
    name: str

@app.get("/api/data")
def get_data():
    return {
        "message": "Hello from the FastAPI backend!",
        "items": db_items
    }

# New POST endpoint to add an item
@app.post("/api/items")
def add_item(item: Item):
    db_items.append(item.name)  # Add the new item to our in-memory list
    return {"message": "Item added successfully", "items": db_items}
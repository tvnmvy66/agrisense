from pydantic import BaseModel
from typing import List

class CropInput(BaseModel):
    soil_type: str
    pH: float
    rainfall_30: float
    avg_temp_30: float
    lat: float
    irrigation: bool = False

class CropRecommendation(BaseModel):
    crop: str
    estimated_yield_kg_per_acre: float
    estimated_profit_inr_per_acre: float
    risk: str

class RecommendResponse(BaseModel):
    recommendations: List[CropRecommendation]

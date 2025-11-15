from fastapi import APIRouter
from app.models import CropInput, RecommendResponse, CropRecommendation
from app.ml.model_stub import predict_yield

router = APIRouter()

@router.post("/recommend", response_model=RecommendResponse)
def recommend(input: CropInput):

    crop_map = {
        "Loamy": ["Maize", "Soybean", "Potato"],
        "Alluvial": ["Rice", "Wheat", "Sugarcane"],
        "Sandy": ["Millet", "Groundnut", "Sesame"],
        "Clayey": ["Rice", "Cotton", "Mustard"]
    }

    candidates = crop_map.get(input.soil_type, ["Maize", "Wheat", "Rice"])

    output = []

    for crop in candidates:
        est_yield = predict_yield({})
        est_profit = est_yield * 10

        output.append(
            CropRecommendation(
                crop=crop,
                estimated_yield_kg_per_acre=est_yield,
                estimated_profit_inr_per_acre=est_profit,
                risk="low"
            )
        )

    return RecommendResponse(recommendations=output)

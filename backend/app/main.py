from fastapi import FastAPI
from app.routes.recommend import router as recommend_router

app = FastAPI(title="SmartCrop Advisor - Backend")

app.include_router(recommend_router, prefix="/api")

@app.get("/")
def root():
    return {"status": "ok", "message": "backend working"}

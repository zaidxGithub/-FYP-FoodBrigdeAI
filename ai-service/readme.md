# AI / ML (optional & future)

Python workspace for the "Demand Prediction" module in the architecture diagram.
The frontend demo uses a simple weekday-average outlook (`client/src/utils/ai.js → predictDemand`).
Replace it with a trained model served from here (FastAPI/Flask) once real data exists.

```bash
cd ai-ml
pip install -r requirements.txt
python demand_prediction.py
```

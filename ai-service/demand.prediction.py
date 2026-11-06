"""Illustrative demand model: predicts meals redistributed per weekday.
Input: a CSV exported from the app with columns `completedAt,meals`.
"""
import sys
import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor


def train(csv_path: str):
    df = pd.read_csv(csv_path, parse_dates=["completedAt"])
    df["weekday"] = df["completedAt"].dt.weekday
    daily = df.groupby(df["completedAt"].dt.date).agg(meals=("meals", "sum"), weekday=("weekday", "first")).reset_index(drop=True)
    model = GradientBoostingRegressor().fit(daily[["weekday"]], daily["meals"])
    return model


if __name__ == "__main__":
    model = train(sys.argv[1])
    for day in range(7):
        print(day, round(float(model.predict(pd.DataFrame({"weekday": [day]}))[0])))

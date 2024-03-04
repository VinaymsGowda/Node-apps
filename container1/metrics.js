import express from "express";
import client from "prom-client";

const app = express();

export function startMetricsServer() {
    const collectDefaultMetrics = client.collectDefaultMetrics;
    collectDefaultMetrics();

    app.get("/metrics", async (req, res) => {
        res.set("Content-Type", client.register.contentType);
        return res.send(await client.register.metrics());
    });

    app.listen(5001, () => {
        console.log("Metrics Server Started at port 5001");
    });
}

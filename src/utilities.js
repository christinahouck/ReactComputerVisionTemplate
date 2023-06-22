export const drawRect = (detections, ctx) => {
    detections.forEach((prediction) => {
        // get the results of the prediction
        const [x, y, width, height] = prediction["bbox"];
        const text = prediction["class"];

        // set styling
        const color = "hotpink";
        ctx.strokeStyle = color;
        ctx.font = "18px Arial";
        ctx.fillStyle = color;

        // draw rectangles and text
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
};

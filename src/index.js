import '@chartshq/muze/dist/muze.css';

async function importMuze() { return await import(/* webpackChunkName: "muze-import" */ '@chartshq/muze').then((module) => module.default);}

async function myAsyncFn() {
  const muze = await importMuze();
  
  // Load the DataModel module.
  const DataModel = await muze.DataModel.onReady();

  const data = await fetch('/data/cars.json').then(resp => resp.json());
  const schema = await fetch('/data/cars-schema.json').then(resp => resp.json());

  // Converts the raw data into a format
  // which DataModel can consume.
  const formattedData = await DataModel.loadData(data, schema);

  // Create a new DataModel instance with
  // the formatted data.
  let dm = new DataModel(formattedData);

  // Create a global environment to share common configs across charts.
  const env = await muze();

  // Create a new canvas instance from the global
  // environment to render chart on.
  const canvas = env.canvas();

  canvas
    .data(dm) // Set data to the chart.
    .rows(["Acceleration"]) // Fields drawn on Y axis.
    .columns(["Year"]) // Fields drawn on X axis.
    .width(500)
    .height(400)
    .mount("#chart"); // Specify an element to mount on using a CSS selector.
}

myAsyncFn().catch(console.error.bind(console));

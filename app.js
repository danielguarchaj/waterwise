// Datos simulados
const sensorData = [
  { id: "Sensor 1", status: "Activo", lastCheck: "Hace 2 minutos" },
  { id: "Sensor 2", status: "Inactivo", lastCheck: "Hace 10 minutos" },
  { id: "Sensor 3", status: "Activo", lastCheck: "Hace 5 minutos" },
];

// const alerts = [
//   "Fuga detectada en la Zona 3",
//   "Tasa de flujo alta en la Zona 1",
// ];

const waterQuality = {
  pH: 7.2,
  turbidity: 1.5, // Unidades de NTU (turbidez)
};

// Datos para gráficos
const waterFlowData = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
  datasets: [
    {
      label: "Tasa de Flujo (L/min)",
      data: [25, 45, 30, 50, 65, 40],
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      borderColor: "rgba(0, 123, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const consumptionComparisonData = {
  labels: ["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4"],
  datasets: [
    {
      label: "Consumo (Litros)",
      data: [3500, 2800, 3100, 4000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Mostrar datos de uso total de agua
document.getElementById("totalWaterUsage").textContent = "150,800 Litros";

// Mostrar alertas
// const alertsList = document.getElementById("alerts");
// alertsList.innerHTML = "";
// alerts.forEach((alert) => {
//   const li = document.createElement("li");
//   li.textContent = alert;
//   alertsList.appendChild(li);
// });

// Mostrar estado de los sensores
const sensorTable = document.getElementById("sensorTable");
sensorTable.innerHTML = "";
sensorData.forEach((sensor) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${sensor.id}</td><td>${sensor.status}</td><td>${sensor.lastCheck}</td>`;
  sensorTable.appendChild(row);
});

// Mostrar calidad del agua
document.getElementById(
  "waterQuality"
).textContent = `pH: ${waterQuality.pH}, Turbidez: ${waterQuality.turbidity} NTU`;

// Gráfico de flujo de agua
const ctx1 = document.getElementById("waterFlowChart").getContext("2d");
const waterFlowChart = new Chart(ctx1, {
  type: "line",
  data: waterFlowData,
  options: {
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// Gráfico comparativo de consumo
const ctx2 = document
  .getElementById("consumptionComparisonChart")
  .getContext("2d");
const consumptionChart = new Chart(ctx2, {
  type: "bar",
  data: consumptionComparisonData,
  options: {
    scales: {
      y: { beginAtZero: true },
    },
  },
});

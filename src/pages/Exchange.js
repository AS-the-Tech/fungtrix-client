import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
var data = {
  options: {
    plotOptions: {
      candlestick: {
        wick: {
          useFillColor: true,
        },
      },
    },

    chart: {
      type: "candlestick",
      height: 350,
      color: '#ff0000',
    },

    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      tickPlacement: "on",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  },
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  zoom: {
    enabled: true,
  },
};
export default function Exchange() {
  return (
    <div className="container-fluid mtb15 no-fluid">
      <div style={{ gap: "10px" }} className="row sm-gutters">
        <div className="col-md-8">
          <div className="market-trade-history" style={{ width: "100%" }}>
            <h2 className="heading">Trade History</h2>

            {/* <Line
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    fill: false,
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgba(255, 99, 132, 0.2)",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            /> */}
            <Chart
              options={data.options}
              series={data.series}
              type="candlestick"
              width="100%"
            />
          </div>
          <div className="market-trade">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#pills-trade-limit"
                  role="tab"
                  aria-selected="true"
                >
                  Limit
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="pills-trade-limit"
                role="tabpanel"
              >
                <div className="d-flex justify-content-between">
                  <div className="market-trade-buy">
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">AC</span>
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Amount"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">SHARES</span>
                      </div>
                    </div>
                    <button className="btn buy">Buy</button>
                  </div>
                  <div className="market-trade-sell">
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">AC</span>
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Amount"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">SHARES</span>
                      </div>
                    </div>
                    <button className="btn sell">Sell</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="order-book mb15">
            <h2 className="heading">Order Book</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Price(AC)</th>
                  <th>Shares</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="red-bg-80">
                  <td className="red">0.022572</td>
                  <td>1.253415</td>
                  <td>15.27648</td>
                </tr>
                <tr className="red-bg-60">
                  <td className="red">0.020371</td>
                  <td>1.205415</td>
                  <td>15.25648</td>
                </tr>
                <tr className="red-bg-40">
                  <td className="red">0.023572</td>
                  <td>1.645415</td>
                  <td>15.23648</td>
                </tr>
                <tr className="red-bg-20">
                  <td className="red">0.032378</td>
                  <td>1.206715</td>
                  <td>15.25348</td>
                </tr>
                <tr className="red-bg-10">
                  <td className="red">0.022573</td>
                  <td>1.262415</td>
                  <td>15.19648</td>
                </tr>
                <tr className="red-bg-8">
                  <td className="red">0.154377</td>
                  <td>1.225415</td>
                  <td>15.35648</td>
                </tr>
                <tr className="red-bg-5">
                  <td className="red">0.120373</td>
                  <td>1.285415</td>
                  <td>15.25648</td>
                </tr>
                <tr className="red-bg">
                  <td className="red">0.028576</td>
                  <td>1.291415</td>
                  <td>15.26448</td>
                </tr>
              </tbody>
              <tbody className="ob-heading">
                <tr>
                  <td>
                    <span>Last Price</span>
                    0.020367
                  </td>
                  <td>
                    <span>USD</span>
                    148.65
                  </td>
                  <td className="red">
                    <span>Change</span>
                    -0.51%
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="green-bg">
                  <td className="green">0.158373</td>
                  <td>1.209515</td>
                  <td>15.23248</td>
                </tr>
                <tr className="green-bg-5">
                  <td className="green">0.020851</td>
                  <td>1.206245</td>
                  <td>15.25458</td>
                </tr>
                <tr className="green-bg-8">
                  <td className="green">0.025375</td>
                  <td>1.205715</td>
                  <td>15.65648</td>
                </tr>
                <tr className="green-bg-10">
                  <td className="green">0.020252</td>
                  <td>1.205495</td>
                  <td>15.24548</td>
                </tr>
                <tr className="green-bg-20">
                  <td className="green">0.020373</td>
                  <td>1.205415</td>
                  <td>15.25648</td>
                </tr>
                <tr className="green-bg-40">
                  <td className="green">0.020156</td>
                  <td>1.207515</td>
                  <td>15.28948</td>
                </tr>
                <tr className="green-bg-60">
                  <td className="green">0.540375</td>
                  <td>1.205915</td>
                  <td>15.25748</td>
                </tr>
                <tr className="green-bg-80">
                  <td className="green">0.020372</td>
                  <td>1.205415</td>
                  <td>15.25648</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import NFTCard from "../components/NFTCard";
import { getApprovedNFTS } from "../api/api";
import axios from "axios";

export default function Market() {
  const [nfts, setNfts] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [ownershipValue, setOwnershipValue] = React.useState([]);
  React.useEffect(() => {
    getApprovedNFTS().then(async (res) => {
      let token = [];
      console.log(res.data.nft);
      setNfts(res.data.nft);
      res.data.nft.map((item) => token.push(item.tokenId));
      await axios
        .post("http://localhost:8000/nft/divisibilities", {
          tokenIds: token,
        })
        .then((res) => {
          setOwnershipValue(res.data);
          setloading(true);
        });
    });
  }, []);
  const [value, setvalue] = React.useState([]);

  //   const getownership = async (wallet, id) => {
  //     return await axios.post("http://localhost:8000/nft/owner/own", {
  //       tokenId: id,
  //       owner: wallet,
  //     });
  //   };
  return (
    <>
      {console.log(ownershipValue)}
      {!loading ? (
        <div style={{ height: "100vh" }} className="markets-capital pt70 pb40">
          <center>
            <h1
              style={{
                color: "white",
                letterSpacing: "1px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Loading...
            </h1>
          </center>
        </div>
      ) : (
        <div className="markets-capital pt70 pb40">
          <div style={{ overflow: "auto" }} className="container">
            <p
              style={{
                color: "white",
                letterSpacing: "1px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              List of NFT's
            </p>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Ownership</th>
                  <th scope="col">Face Value</th>
                  <th scope="col">Total Shares</th>
                  <th scope="col">Current Price</th>
                </tr>
              </thead>
              <tbody>
                {nfts &&
                  nfts.map((item, index) => {
                    //   var percentage = [];
                    //   getownership(item.user["walletAddress"], item.tokenId).then(
                    //     (ownership) => {
                    //       //   percentage = ownership.data;
                    //       //   console.log(ownership.data);
                    //       value.push(ownership.data +1 / item.shares * 100);
                    //     }
                    //   );

                    return (
                      <>
                        {console.log(value[index])}
                        <tr>
                          <th scope="row">
                            <img
                              src={item.image}
                              style={{
                                width: "100px",
                                height: "100px",
                              }}
                            />
                          </th>
                          <td>{item.name}</td>
                          <td>
                            {item.user["name"]}
                            &nbsp;{(ownershipValue[index] / item.shares) * 100}%
                          </td>
                          <td>{item.price}</td>
                          <td>{item.shares}</td>
                          <td>{item.organization}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
{
  /* <div className="row">
                    {nfts && nfts.map((nf, index) =>
                    (
                        <NFTCard key={index} nft={nf} />
                    )
                    )}
                </div> */
}

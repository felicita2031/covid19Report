import React,{useState,useEffect} from 'react'
import axios from 'axios'
function App() {

  const [veri,setVeri]=useState("")
  const [tarih,setTarih]=useState("11/03/2020")

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))
    console.log(veri)
  },[veri,tarih])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">
              TÜRKİYE COVID-19 Arama Motoru
            </h2>
            <input
              className="form-control"
              type="text"
              placeholder="GG/AA/YYYY"
              onChange={(e)=>setTarih(e.target.value)}
            />

            <table className="text-white table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayıs</th>
                </tr>
              </thead>
              <tbody >
                <tr className={veri===undefined? "bg-danger":"bg-success"} >
                  <th className="text-white" scope="row">1</th>
                  <td className={"text-white"}>{veri===undefined?"Veri Bekleniyor":veri.totalTests}</td>
                  <td className="text-white">{veri===undefined?"Veri Bekleniyor":veri.patients}</td>
                  <td className="text-white">{veri===undefined?"Veri Bekleniyor":veri.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

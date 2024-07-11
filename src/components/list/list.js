export const ListParentOrdered = () => {
    return (
      <ol>
        <ListItems />
      </ol>
    );
  };
  
  export const ListParentUnordered = () => {
    return (
      <ul>
        <ListItems />
      </ul>
    );
  };
  // const ListItems = () =>{
  //   return(
  //     <div>
  //       <li>apple</li>
  //       <li>banana</li>
  //       <li>pineapple</li>
  //       <li>mango</li>
  //     </div>
  //   )
  // }
  
  // const ListItems = () =>{
  //   const fruitlist  = ["apple","banana","pineapple","mango"]
  //   return(
  //     <div>
  //       {
  //         fruitlist.map((eachfruit)=>{
  //           return <h3>{eachfruit} </h3>
  //         })
  //       }
  //     </div>
  //   )
  // }

  const ListItems = ()=>{
    const iplteams =[
      {
        teamname:"Rcb",
        teamplayers:["Faf du Plessis (C)","Glenn Maxwell","Virat Kohli","Rajat Patidar","Anuj Rawat"],
        won: 0,
        wonyears :[],
        teamlogo:"https://th.bing.com/th?id=OIP.OBk7KaJxvCLUB5m8RGk6LwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
      },
      {
        teamname:"Srh",
        teamplayers:["Aiden Markram (C)","Abdul Samad","Abhishek Sharma","Marco Jansen" ],
        won: 3,
        wonyears :["2008","2007","2006","2005"],
        teamlogo:"https://th.bing.com/th/id/OIP.gxUXg5qD_aJjNgwJbRQLFAHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"

      },
      {
        teamname:"KKr",
        teamplayers:["Jason Roy"," Shreyas Iyer ©"," Angkrish Raghuvanshi", "Rinku Singh "],
        won: 5,
        wonyears :["2012","2011","2010","2009"],
        teamlogo:"https://th.bing.com/th/id/OIP.NRBGPt47RNSyByGz6Lnw5QHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      },
      {
        teamname:"Csk",
        teamplayers:["MS Dhoni", "Ravindra Jadeja", "Ruturaj Gaikwad", "Ajinkya Rahane", "Deepak Chahar"],
        won: 6 ,
        wonyears :["2015","2014","2013"],
        teamlogo:"https://th.bing.com/th/id/OIP.pXoSFJjuBcFs4OlZnOj09wHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      },
      {
        teamname:"MI",
        teamplayers:["Hardik Pandya","Rohit Sharma","Dewald Brevis","Suryakumar Yadav","Ishan Kishan"],
        won: 5,
        wonyears :["2019","2016","2018"],
        teamlogo:"https://th.bing.com/th?q=MI+India+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
      },
      {
        teamname:"GT",
        teamplayers:["Abhinav Sadarangani"," B. Sai Sudharsan", "Darshan Nalkande", "David Miller", "Jayant Yadav "],
        won: 1,
        wonyears :["2019"],
        teamlogo:"https://th.bing.com/th/id/OIP.qqFNA-bTm4oUkGDUIIxIggAAAA?w=282&h=159&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      },
    ];
      function filterdata(iplteams){
        const newteams = iplteams.filter((eachTeam) => eachTeam.won >=5)
          return newteams;
      }

      function countMatch(iplteams){
        const newiplteamscount = iplteams.reduce((acc, eachTeam) => {
          return acc+eachTeam.won
        },0) 
        return newiplteamscount;
      }
    return (
      <div>
        <h3>Total Count of Mtaches {countMatch(iplteams)}</h3>
          {filterdata(iplteams).map((eachTeam)=>{
            return(
              <div>
                <h1>{eachTeam.teamname}</h1>
                <img src={eachTeam.teamlogo} width={400} height={400}/>
                { eachTeam.teamplayers.map((eachplayer )=>{
                    return(
                      <>
                      <h6>{eachplayer}</h6>
                      </>
                    )
                  })
                }
              </div>
            )
          })};
      </div>
    )
  }
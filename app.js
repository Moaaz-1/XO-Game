document.querySelector(".info button").onclick = () => {
  if (
    document.querySelectorAll(".info select")[0].value ===
    document.querySelectorAll(".info select")[1].value
  ) {
    document.querySelectorAll(".info span")[0].style.display = "block";
  } else {
    if (
      document.querySelectorAll(".info input")[0].value != "" &&
      document.querySelectorAll(".info input")[1].value != ""
    ) {
      let players = {
        fplayer: document.querySelectorAll(".info input")[0].value,
        fchar: document.querySelectorAll(".info select")[0].value,
        splayer: document.querySelectorAll(".info input")[1].value,
        schar: document.querySelectorAll(".info select")[1].value,
      };
      sessionStorage.setItem("players", JSON.stringify(players));
      document.querySelector(".info").style.display = "none";
      document.querySelector(".container").style.display = "grid";
      document.querySelector(".playersname").style.display = "flex";
      document.querySelectorAll(
        ".playersname h2"
      )[0].textContent = `1st player: ${
        JSON.parse(sessionStorage.getItem("players")).fplayer
      } ,${JSON.parse(sessionStorage.getItem("players")).fchar}`;
      document.querySelectorAll(
        ".playersname h2"
      )[1].textContent = `2nd player: ${
        JSON.parse(sessionStorage.getItem("players")).splayer
      } ,${JSON.parse(sessionStorage.getItem("players")).schar}`;
    } else {
      document.querySelectorAll(".info span")[1].style.display = "block";
    }
  }
};

let num = 0;
document.querySelectorAll(".container div").forEach((ele) => {
  ele.onclick = () => {
    if (
      num == 0 &&
      ele.querySelector(".o").id != 1 &&
      ele.querySelector(".x").id != 1
    ) {
      if(JSON.parse(sessionStorage.getItem("players")).fchar==='X'){
        ele.querySelector(".x").style.display = "block";
        ele.querySelector(".x").id = 1;
      }else{
        ele.querySelector(".o").style.display = "block";
        ele.querySelector(".o").id = 1;
      }
      num = 1;
    } else if (
      num == 1 &&
      ele.querySelector(".o").id != 1 &&
      ele.querySelector(".x").id != 1
    ) {
      if(JSON.parse(sessionStorage.getItem("players")).schar==='O'){
        ele.querySelector(".o").style.display = "block";
        ele.querySelector(".o").id = 1;
      }else{
        ele.querySelector(".x").style.display = "block";
        ele.querySelector(".x").id = 1;
      }
      num = 0;
    }
    if (
      (document.querySelectorAll(".container div")[0].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[1].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[2].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[3].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[5].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[6].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[7].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[8].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[0].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[3].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[6].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[1].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[7].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[2].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[5].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[8].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[0].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[8].querySelector(".x").id ==
          1) ||
      (document.querySelectorAll(".container div")[2].querySelector(".x").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".x").id ==
          1 &&
        document.querySelectorAll(".container div")[6].querySelector(".x").id ==
          1)
    ) {
      for (let i = 0; i < 9; i++) {
        document
          .querySelectorAll(".container div")
          [i].querySelector(".x").id = 1;
      }
      if (JSON.parse(sessionStorage.getItem("players")).fchar == "X") {
        let new_ele = document.createElement("div");
        new_ele.style.cssText =
          "position: absolute;left: 50%;transform: translateX(-50%);top: 30%;width: fit-content;background-color: #009688;padding: 10px;box-shadow: 0px 0px 10px var(--list-color);color: white;font-family: sans-serif;";
        let msg = document.createElement("span");
        msg.textContent = `End game, ${
          JSON.parse(sessionStorage.getItem("players")).fplayer
        } is the winner`;
        new_ele.appendChild(msg);
        document.body.appendChild(new_ele);
      } else {
        let new_ele = document.createElement("div");
        new_ele.style.cssText =
          "position: absolute;left: 50%;transform: translateX(-50%);top: 30%;width: fit-content;background-color: #009688;padding: 10px;box-shadow: 0px 0px 10px var(--list-color);color: white;font-family: sans-serif;";
        let msg = document.createElement("span");
        msg.textContent = `End game, ${
          JSON.parse(sessionStorage.getItem("players")).splayer
        } is the winner`;
        new_ele.appendChild(msg);
        document.body.appendChild(new_ele);
      }
    } else if (
      (document.querySelectorAll(".container div")[0].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[1].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[2].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[3].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[5].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[6].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[7].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[8].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[0].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[3].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[6].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[1].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[7].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[2].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[5].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[8].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[0].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[8].querySelector(".o").id ==
          1) ||
      (document.querySelectorAll(".container div")[2].querySelector(".o").id ==
        1 &&
        document.querySelectorAll(".container div")[4].querySelector(".o").id ==
          1 &&
        document.querySelectorAll(".container div")[6].querySelector(".o").id ==
          1)
    ) {
      for (let i = 0; i < 9; i++) {
        document
          .querySelectorAll(".container div")
          [i].querySelector(".o").id = 1;
      }
      if (JSON.parse(sessionStorage.getItem("players")).fchar == "O") {
        let new_ele = document.createElement("div");
        new_ele.style.cssText =
          "position: absolute;left: 50%;transform: translateX(-50%);top: 30%;width: fit-content;background-color: #009688;padding: 10px;box-shadow: 0px 0px 10px var(--list-color);color: white;font-family: sans-serif;";
        let msg = document.createElement("span");
        msg.textContent = `End game, ${
          JSON.parse(sessionStorage.getItem("players")).fplayer
        } is the winner`;
        new_ele.appendChild(msg);
        document.body.appendChild(new_ele);
      } else {
        let new_ele = document.createElement("div");
        new_ele.style.cssText =
          "position: absolute;left: 50%;transform: translateX(-50%);top: 30%;width: fit-content;background-color: #009688;padding: 10px;box-shadow: 0px 0px 10px var(--list-color);color: white;font-family: sans-serif;";
        let msg = document.createElement("span");
        msg.textContent = `End game, ${
          JSON.parse(sessionStorage.getItem("players")).splayer
        } is the winner`;
        new_ele.appendChild(msg);
        document.body.appendChild(new_ele);
      }
    } else {
      let x = 0,
        o = 0;
      for (let i = 0; i < 9; i++) {
        if (
          document.querySelectorAll(".container div")[i].querySelector(".o")
            .id == 1
        ) {
          o++;
        } else if (
          document.querySelectorAll(".container div")[i].querySelector(".x")
            .id == 1
        ) {
          x++;
        }
      }
      if ((x == 4 && o ==5)||(x == 5 && o == 4)) {
        let new_ele = document.createElement("div");
        new_ele.style.cssText =
          "position: absolute;left: 50%;transform: translateX(-50%);top: 30%;width: fit-content;background-color: #009688;padding: 10px;box-shadow: 0px 0px 10px var(--list-color);color: white;font-family: sans-serif;";
        let msg = document.createElement("span");
        msg.textContent = `End game, Draw`;
        new_ele.appendChild(msg);
        document.body.appendChild(new_ele);
      }
    }
  };
});

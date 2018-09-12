<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);
$id = "";

if (!isset($data->functionPage)) {
    echo "Função não definida para este evento!";
    exit;
}

if ((!isset($data->userSession->id) || !is_numeric($data->userSession->id) || $data->userSession->id == 0) &&
        ($data->functionPage != "signup" && $data->functionPage != "register")) {
    echo "Sessão inválida!";
    exit;
}

//include "configini.php";

if ($data->functionPage == "signup") {
    if (isset($data->username) && isset($data->password)) {
        $row = array();
        $id = 22;
        $row["id"] = $id;
        $row["name"] = "João Marcos";
        $row["email"] = "joao.marcos@gmail.com";
        $row["img"] = "";
        $row["user"] = "fabricio.oliveira";
        $row["master"] = 1;
    }
    if (is_numeric($id)) {
        echo json_encode($row);
    } else {
        echo "Erro, Usuário ou Senha Inválido!";
    }
}

if ($data->functionPage == "synchronize") {
    if (isset($data->marcacoes)) {
        $marcacoesList = $data->marcacoes;
        for ($i = 0; $i < count($marcacoesList); $i++) {
            $marcacoesList[$i]->id = (500 + $i);
            /* $marcacoesList[$i]->pessoa;
              $marcacoesList[$i]->data;
              $marcacoesList[$i]->hora;
              $marcacoesList[$i]->latitude;
              $marcacoesList[$i]->longitude; */
        }
        echo json_encode($marcacoesList);
    } else {
        echo "Erro, Lista Inválida!";
    }
}

if ($data->functionPage == "downloadList") {
    $toReturn = array();
    for ($i = 0; $i < 3; $i ++) {
        
        $inventario = array();
        $inventario["key"] = "I|" . (36 + $i);
        $inventario["id"] = (36 + $i);
        $inventario["data"] = "07/09/2018";
        $inventario["setor"] = "Azurita";
        $inventario["responsavel"] = "luiz.sakamoto";
        $inventario["estado"] = "ABERTO";
        $inventario["ddownload"] = "07/09/2018 11:07:30";
        $inventario["drefresh"] = "07/09/2018 11:07:30";
        $inventario["status"] = "arrow-round-down";

        $item = array();
        $item["id"] = 1;
        $item["cod"] = "002.014.00420";
        $item["ref"] = "30041093";
        $item["item"] = "ACENDEDOR; APLICAÇÃO: SOLDA ALUMINOTÉRMICA";
        $item["data"] = "";
        $item["qtd"] = "";
        $item["operador"] = "";
        $inventario["itens"][] = $item;

        $toReturn[] = $inventario;
    }
    echo json_encode($toReturn);
}

if ($data->functionPage == "uploadList") {
    $inventario = array();    
    if (isset($data->inventario)) {
        $inventarioList = $data->inventario;
        for ($i = 0; $i < count($inventarioList); $i++) {
            $inventarioList[$i]->ddownload = $inventarioList[$i]->drefresh;
            $inventarioList[$i]->status = "checkmark";
        }
        echo json_encode($inventarioList);
    } else {
        echo "Erro, Lista Inválida!";
    }   
}
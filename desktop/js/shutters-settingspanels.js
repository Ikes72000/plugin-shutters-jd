/*
 * This file is part of the NextDom software (https://github.com/NextDom or http://nextdom.github.io).
 * Copyright (c) 2018 NextDom.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

 /**
 * Display settings panels for eqLogic
 * 
 * @param {object} _eqLogic
 */
function displaySettingsPanels(_eqLogic) {
    var el = $('#settingsTab');
    var div = '';

    switch (_eqLogic.configuration.eqLogicType) {
        case 'externalConditions':
            
            div += '<br/>';
            div += '<div>';
            div += '<ul class="nav nav-tabs">';
            div += '<li class="active">';
            div += '<a href="#priorityConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions prioritaires}}</a>';
            div += '</li>';
            div += '<li>';
            div += '<a href="#secondaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions secondaires}}</a>';
            div += '</li>';
            div += '</ul>';
            div += '<div class="tab-content" style="height:calc(100% - 50px);overflow:auto;overflow-x: hidden;">';

        	div += '<div class="tab-pane active" id="priorityConditionsTab">';

            div += '<div class="row">';
            div += '<br/>';

            div += '<div class="form-group">';

        	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Condition}}</span></h5>';  
            div += '</div>';
        	div += '<div class="col-sm-1">';
            div += '<h5 class="text-center"><span class="label label-default">{{Active}}</span></h5>';  
            div += '</div>';
        	div += '<div class="col-sm-1">';
            div += '<h5 class="text-center"><span class="label label-default">{{Priorité}}</span></h5>';  
            div += '</div>';
	       	div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Commande d\'information}}</span></h5>';  
            div += '</div>';
        	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Statut}}</span></h5>';
            div += '</div>';
        	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Action}}</span></h5>';  
            div += '</div>';
        	div += '<div class="col-sm-1">';
            div += '<h5 class="text-center"><span class="label label-default">{{Nom de la condition}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<br/>';
            div += '<br/>';

           	div += '<div class="form-group">';
        	div += '<label class="col-sm-2 control-label">{{Détection incendie}}</label>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="fireConditionActivated">';
            div += '<option value="0" selected>{{Non}}</option>';
            div += '<option value="1">{{Oui}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="fireConditionPriority">';
            div += '<option value="0">{{Non définie}}</option>';
            div += '<option value="5" selected>{{Très haute}}</option>';
            div += '<option value="4">{{Haute}}</option>';
            div += '<option value="3">{{Moyenne}}</option>';
            div += '<option value="2">{{Basse}}</option>';
            div += '<option value="1">{{Très basse}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-l2key="fireCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="fireCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-l2key="fireCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="fireConditionStatus" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-l2key="fireConditionStatus" data-cmdl2key="fireCondition">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="fireConditionAction" disabled>';
            div += '<option value="-1">{{Gestion automatique}}</option>';
            div += '<option value="0">{{Fermer les volets}}</option>';
            div += '<option value="100" selected>{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="fireConditionName" value="Incendie" placeholder="{{Saisir le nom}}" disabled/>';
            div += '</div>';
        	div += '</div>';

        	div += '<br/>';
        	div += '<br/>';

           	div += '<div class="form-group">';
        	div += '<label class="col-sm-2 control-label">{{Absence (action forcée)}}</label>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="absenceCondition1Activated">';
            div += '<option value="0" selected>{{Non}}</option>';
            div += '<option value="1">{{Oui}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="absenceCondition1Priority">';
            div += '<option value="0">{{Non définie}}</option>';
            div += '<option value="5">{{Très haute}}</option>';
            div += '<option value="4" selected>{{Haute}}</option>';
            div += '<option value="3">{{Moyenne}}</option>';
            div += '<option value="2">{{Basse}}</option>';
            div += '<option value="1">{{Très basse}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-l2key="absenceCondition1">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition1" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-l2key="absenceCondition1">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition1Status" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-l2key="absenceCondition1Status" data-cmdl2key="absenceCondition1">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="absenceCondition1Action" disabled>';
            div += '<option value="-1">{{Gestion automatique}}</option>';
            div += '<option value="0" selected>{{Fermer les volets}}</option>';
            div += '<option value="100">{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition1Name" value="Absence (GF)" placeholder="{{Saisir le nom}}" disabled/>';
            div += '</div>';
        	div += '</div>';

            div += '<br/>';
        	div += '<br/>';

            div += '<div class="form-group">';
        	div += '<label class="col-sm-2 control-label">{{Absence (action auto)}}</label>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="absenceCondition2Activated">';
            div += '<option value="0" selected>{{Non}}</option>';
            div += '<option value="1">{{Oui}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="absenceCondition2Priority">';
            div += '<option value="0">{{Non définie}}</option>';
            div += '<option value="5">{{Très haute}}</option>';
            div += '<option value="4">{{Haute}}</option>';
            div += '<option value="3" selected>{{Moyenne}}</option>';
            div += '<option value="2">{{Basse}}</option>';
            div += '<option value="1">{{Très basse}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-l2key="absenceCondition2">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition2" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-l2key="absenceCondition2">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition2Status" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-l2key="absenceCondition2Status" data-cmdl2key="absenceCondition2">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="absenceCondition2Action" disabled>';
            div += '<option value="-1" selected>{{Gestion automatique}}</option>';
            div += '<option value="0">{{Fermer les volets}}</option>';
            div += '<option value="100">{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition2Name" value="Absence (GA)" placeholder="{{Saisir le nom}}" disabled/>';
            div += '</div>';
        	div += '</div>';

            div += '<br/>';
        	div += '<br/>';

            div += '<div class="form-group">';
        	div += '<label class="col-sm-2 control-label">{{Condition 1 utilisateur}}</label>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="userCondition1Activated">';
            div += '<option value="0" selected>{{Non}}</option>';
            div += '<option value="1">{{Oui}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="userCondition1Priority">';
            div += '<option value="0">{{Non définie}}</option>';
            div += '<option value="5">{{Très haute}}</option>';
            div += '<option value="4">{{Haute}}</option>';
            div += '<option value="3">{{Moyenne}}</option>';
            div += '<option value="2" selected>{{Basse}}</option>';
            div += '<option value="1">{{Très basse}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-l2key="userCondition1">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="userCondition1" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-l2key="userCondition1">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="userCondition1Status" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-l2key="userCondition1Status" data-cmdl2key="userCondition1">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="userCondition1Action">';
            div += '<option value="-1" selected>{{Gestion automatique}}</option>';
            div += '<option value="0">{{Fermer les volets}}</option>';
            div += '<option value="100">{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="userCondition1Name" placeholder="{{Saisir le nom}}"/>';
            div += '</div>';
        	div += '</div>';

            div += '<br/>';
        	div += '<br/>';

           	div += '<div class="form-group">';
        	div += '<label class="col-sm-2 control-label">{{Condition 2 utilisateur}}</label>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="userCondition2Activated">';
            div += '<option value="0" selected>{{Non}}</option>';
            div += '<option value="1">{{Oui}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="userCondition2Priority">';
            div += '<option value="0">{{Non définie}}</option>';
            div += '<option value="5">{{Très haute}}</option>';
            div += '<option value="4">{{Haute}}</option>';
            div += '<option value="3">{{Moyenne}}</option>';
            div += '<option value="2">{{Basse}}</option>';
            div += '<option value="1" selected>{{Très basse}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-l2key="userCondition2">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="userCondition2" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-l2key="userCondition2">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="userCondition2Status" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-l2key="userCondition2Status" data-cmdl2key="userCondition2">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="userCondition2Action">';
            div += '<option value="-1" selected>{{Gestion automatique}}</option>';
            div += '<option value="0">{{Fermer les volets}}</option>';
            div += '<option value="100">{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="userCondition2Name" placeholder="{{Saisir le nom}}"/>';
            div += '</div>';
        	div += '</div>';
        
        	div += '</div>';
        	div += '</div>';
	
        	div += '<div class="tab-pane" id="secondaryConditionsTab">';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            break;
    
        case 'heliotropeZone':
            div += '<br/>';
            div += '<div>';
            div += '<ul class="nav nav-tabs">';
            div += '<li class="active">';
            div += '<a href="#primaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions primaires}}</a>';
            div += '</li>';
            div += '<li>';
            div += '<a href="#secondaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions secondaires}}</a>';
            div += '</li>';
            div += '</ul>';
            div += '<div class="tab-content" style="height:calc(100% - 50px);overflow:auto;overflow-x: hidden;">';
            div += '<div class="tab-pane active" id="primaryConditionsTab">';
            div += '</div>';
            div += '<div class="tab-pane" id="secondaryConditionsTab">';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            break;

        case 'shuttersGroup':
            div += '<br/>';
            div += '<div>';
            div += '<ul class="nav nav-tabs">';
            div += '<li class="active">';
            div += '<a href="#primaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions primaires}}</a>';
            div += '</li>';
            div += '<li>';
            div += '<a href="#secondaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions secondaires}}</a>';
            div += '</li>';
            div += '</ul>';
            div += '<div class="tab-content" style="height:calc(100% - 50px);overflow:auto;overflow-x: hidden;">';
            div += '<div class="tab-pane active" id="primaryConditionsTab">';
            div += '</div>';
            div += '<div class="tab-pane" id="secondaryConditionsTab">';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            break;

        case 'shutter':
            div += '<br/>';
            div += '<div>';
            div += '<ul class="nav nav-tabs">';
            div += '<li class="active">';
            div += '<a href="#primaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions primaires}}</a>';
            div += '</li>';
            div += '<li>';
            div += '<a href="#secondaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions secondaires}}</a>';
            div += '</li>';
            div += '</ul>';
            div += '<div class="tab-content" style="height:calc(100% - 50px);overflow:auto;overflow-x: hidden;">';
            div += '<div class="tab-pane active" id="primaryConditionsTab">';
            div += '</div>';
            div += '<div class="tab-pane" id="secondaryConditionsTab">';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            break;

        default:
            break;
    }

    el.empty();
    el.append(div);

}


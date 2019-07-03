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
 * @param {string} _eqLogicType
 */
function displaySettingsPanels(_eqLogicType = '') {
    var el = $('#settingsTab');
    var div = '';

    switch (_eqLogicType) {
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
	       	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Commande d\'information}}</span></h5>';  
            div += '</div>';
        	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Statut}}</span></h5>';
            div += '</div>';
        	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Action}}</span></h5>';  
            div += '</div>';
        	div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Nom de la condition}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<br/>';
            div += '<br/>';

            for (var i=1; i<=10; i++) {
           	div += '<div class="form-group">';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="priorityCondition' + i + 'Type">';
            div += '<option value="0" selected>{{Non définie}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="priorityCondition' + i + 'Enabled" disabled>';
            div += '<option value="0" selected>{{Non}}</option>';
            div += '<option value="1">{{Oui}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-1">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="priorityCondition' + i + 'Priority" disabled>';
            div += '<option value="0" selected>{{Non définie}}</option>';
            div += '<option value="1">1</option>';
            div += '<option value="2">2</option>';
            div += '<option value="3">3</option>';
            div += '<option value="4">4</option>';
            div += '<option value="5">5</option>';
            div += '<option value="6">6</option>';
            div += '<option value="7">7</option>';
            div += '<option value="8">8</option>';
            div += '<option value="9">9</option>';
            div += '<option value="10">10</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-l2key="priorityCondition' + i + '">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="priorityCondition' + i + '" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-l2key="priorityCondition' + i + '">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<div class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="priorityCondition' + i + 'Status" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-l2key="priorityCondition' + i + 'Status" data-cmdl2key="priorityCondition' + i + '">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="priorityCondition' + i + 'Action" >';
            div += '<option value="-1">{{Gestion automatique}}</option>';
            div += '<option value="0">{{Fermer les volets}}</option>';
            div += '<option value="5" selected>{{Positionner les volets à 5%}}</option>';
            div += '<option value="10" selected>{{Positionner les volets à 10%}}</option>';
            div += '<option value="15" selected>{{Positionner les volets à 15%}}</option>';
            div += '<option value="20" selected>{{Positionner les volets à 20%}}</option>';
            div += '<option value="25" selected>{{Positionner les volets à 25%}}</option>';
            div += '<option value="30" selected>{{Positionner les volets à 30%}}</option>';
            div += '<option value="35" selected>{{Positionner les volets à 35%}}</option>';
            div += '<option value="40" selected>{{Positionner les volets à 40%}}</option>';
            div += '<option value="45" selected>{{Positionner les volets à 45%}}</option>';
            div += '<option value="50" selected>{{Positionner les volets à 50%}}</option>';
            div += '<option value="55" selected>{{Positionner les volets à 55%}}</option>';
            div += '<option value="60" selected>{{Positionner les volets à 60%}}</option>';
            div += '<option value="65" selected>{{Positionner les volets à 65%}}</option>';
            div += '<option value="70" selected>{{Positionner les volets à 70%}}</option>';
            div += '<option value="75" selected>{{Positionner les volets à 75%}}</option>';
            div += '<option value="80" selected>{{Positionner les volets à 80%}}</option>';
            div += '<option value="85" selected>{{Positionner les volets à 85%}}</option>';
            div += '<option value="90" selected>{{Positionner les volets à 80%}}</option>';
            div += '<option value="95" selected>{{Positionner les volets à 95%}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="priorityCondition' + i + 'Name" value="" placeholder="{{Saisir le nom}}"/>';
            div += '</div>';
        	div += '</div>';
        	div += '<br/>';
        	div += '<br/>';
        } 
        
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


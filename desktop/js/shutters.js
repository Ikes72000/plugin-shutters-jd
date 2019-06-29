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

function printEqLogic(_eqLogic) {
    
    console.log('function printEqLogic()');
    console.log('eqLogic =>' . _eqLogic);

    if (!isset(_eqLogic)) {
        var _eqLogic = {configuration: {}};
    }
    
    if (!isset(_eqLogic.configuration)) {
        _eqLogic.configuration = {};
    }

    if ($('[data-l1key=configuration][data-l2key=eqLogicType]').val() !== '') {
        $('[data-l1key=configuration][data-l2key=eqLogicType]').attr('disabled', true);
    } else {
        $('[data-l1key=configuration][data-l2key=eqLogicType]').attr('disabled', false);
    }

}

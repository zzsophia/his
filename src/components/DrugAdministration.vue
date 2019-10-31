<template>
    <div>
        <div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <div class="el-input el-input--mini" data-v-49055fb4="">
                        <input class="el-input__inner" type="text"
                                      placeholder="请输入药品助记码" autocomplete="off"><!---->
                        </div>
                </div>
            </div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <button class="el-button el-button--primary el-button--mini"
                            style="margin-left: 10px;" type="button" data-v-49055fb4="">
                        <!----><i class="el-icon-view"></i><span>查询药品</span></button>
                </div>
            </div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <button class="el-button el-button--primary el-button--mini"
                            style="margin-left: 10px;" type="button" data-v-49055fb4="">
                        <!----><i class="el-icon-edit"></i><span>新增药品</span></button>
                </div>
            </div>
            <div align="right" class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <div class="upload-demo" data-v-49055fb4="">
                        <div tabindex="0" class="el-upload el-upload--text">
                            <button class="el-button el-button--primary el-button--mini"
                                    type="button" data-v-49055fb4=""><!----><i
                                    class="el-icon-sold-out"></i><span>导入药品</span>
                            </button>
                            <input name="file" class="el-upload__input" type="file">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="el-table el-table--fit el-table--striped el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition el-table--mini"
             style="width: 100%;" data-v-49055fb4="">
            <div class="hidden-columns">
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
                <div data-v-49055fb4=""></div>
            </div>
            <div class="el-table__header-wrapper">
                <table class="el-table__header" style="width: 815px;" border="0"
                       cellspacing="0" cellpadding="0">
                    <colgroup>
                        <col width="55" name="el-table_3_column_18">
                        <col width="140" name="el-table_3_column_19">
                        <col width="80" name="el-table_3_column_20">
                        <col width="140" name="el-table_3_column_21">
                        <col width="80" name="el-table_3_column_22">
                        <col width="80" name="el-table_3_column_23">
                        <col width="80" name="el-table_3_column_24">
                        <col width="80" name="el-table_3_column_25">
                        <col width="80" name="el-table_3_column_26">
                        <col width="0" name="gutter">
                    </colgroup>
                    <thead class="has-gutter">
                    <tr>
                        <th class="el-table_3_column_18  is-left el-table-column--selection  is-leaf"
                            rowspan="1" colspan="1">
                            <div class="cell"><label class="el-checkbox"
                                                     role="checkbox"><span
                                    class="el-checkbox__input"
                                    aria-checked="mixed"><span
                                    class="el-checkbox__inner"></span><input
                                    class="el-checkbox__original" aria-hidden="true"
                                    type="checkbox" value=""></span><!----></label>
                            </div>
                        </th>
                        <th class="el-table_3_column_19  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品编码</div>
                        </th>
                        <th class="el-table_3_column_20  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品名称</div>
                        </th>
                        <th class="el-table_3_column_21  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品规格</div>
                        </th>
                        <th class="el-table_3_column_22  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品单位</div>
                        </th>
                        <th class="el-table_3_column_23  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品单价</div>
                        </th>
                        <th class="el-table_3_column_24  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品剂型</div>
                        </th>
                        <th class="el-table_3_column_25  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品类型</div>
                        </th>
                        <th class="el-table_3_column_26  is-center   is-leaf"
                            rowspan="1" colspan="1">
                            <div class="cell">操作</div>
                        </th>
                        <th class="gutter" style="width: 0px; display: none;"></th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="el-table__body-wrapper is-scrolling-left">
                <table class="el-table__body" style="width: 815px;" border="0"
                       cellspacing="0" cellpadding="0">
                    <colgroup>
                        <col width="55" name="el-table_3_column_18">
                        <col width="140" name="el-table_3_column_19">
                        <col width="80" name="el-table_3_column_20">
                        <col width="140" name="el-table_3_column_21">
                        <col width="80" name="el-table_3_column_22">
                        <col width="80" name="el-table_3_column_23">
                        <col width="80" name="el-table_3_column_24">
                        <col width="80" name="el-table_3_column_25">
                        <col width="80" name="el-table_3_column_26">
                    </colgroup>
                    <tbody><tr class="el-table__row">
                        <td class="el-table_3_column_18 is-left el-table-column--selection"
                            rowspan="1" colspan="1">
                            <div class="cell"><label class="el-checkbox"
                                                     role="checkbox"><span
                                    class="el-checkbox__input"
                                    aria-checked="mixed"><span
                                    class="el-checkbox__inner"></span><input
                                    class="el-checkbox__original" aria-hidden="true"
                                    type="checkbox" value=""></span><!----></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">86979474000209</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">薤白颗粒</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">2.5g/10g袋</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">袋</div>
                        </td>
                        <td class="el-table_3_column_23 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">17.95</div>
                        </td>
                        <td class="el-table_3_column_24 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                颗粒剂
                            </div>
                        </td>
                        <td class="el-table_3_column_25 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">中成药</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>删除
          </span></button>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                        <td class="el-table_3_column_18 is-left el-table-column--selection"
                            rowspan="1" colspan="1">
                            <div class="cell"><label class="el-checkbox"
                                                     role="checkbox"><span
                                    class="el-checkbox__input"
                                    aria-checked="mixed"><span
                                    class="el-checkbox__inner"></span><input
                                    class="el-checkbox__original" aria-hidden="true"
                                    type="checkbox" value=""></span><!----></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">86979474000209</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">维生素K1注射液</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">1ml:10mg×10支/盒</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">盒</div>
                        </td>
                        <td class="el-table_3_column_23 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">10.39</div>
                        </td>
                        <td class="el-table_3_column_24 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                针剂
                            </div>
                        </td>
                        <td class="el-table_3_column_25 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">西药</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>删除
          </span></button>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row">
                        <td class="el-table_3_column_18 is-left el-table-column--selection"
                            rowspan="1" colspan="1">
                            <div class="cell"><label class="el-checkbox"
                                                     role="checkbox"><span
                                    class="el-checkbox__input"
                                    aria-checked="mixed"><span
                                    class="el-checkbox__inner"></span><input
                                    class="el-checkbox__original" aria-hidden="true"
                                    type="checkbox" value=""></span><!----></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">86979474000208</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">0.9%氯化钠注射液(塑瓶)</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">2.25g:250ml×1瓶</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">瓶</div>
                        </td>
                        <td class="el-table_3_column_23 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">14.34</div>
                        </td>
                        <td class="el-table_3_column_24 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                针剂
                            </div>
                        </td>
                        <td class="el-table_3_column_25 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">西药</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>删除
          </span></button>
                            </div>
                        </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                        <td class="el-table_3_column_18 is-left el-table-column--selection"
                            rowspan="1" colspan="1">
                            <div class="cell"><label class="el-checkbox"
                                                     role="checkbox"><span
                                    class="el-checkbox__input"
                                    aria-checked="mixed"><span
                                    class="el-checkbox__inner"></span><input
                                    class="el-checkbox__original" aria-hidden="true"
                                    type="checkbox" value=""></span><!----></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">86979474000209</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">0.9%氯化钠注射液（百特）</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">500ml×1袋</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">瓶</div>
                        </td>
                        <td class="el-table_3_column_23 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">46.91</div>
                        </td>
                        <td class="el-table_3_column_24 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                针剂
                            </div>
                        </td>
                        <td class="el-table_3_column_25 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">西药</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <!----><span>删除
          </span></button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="el-table__column-resize-proxy" style="display: none;"></div>
        </div>
        <div class="el-row" data-v-49055fb4="">
            <div align="left" class="el-col el-col-8" data-v-49055fb4="">
                <button disabled="disabled"
                        class="el-button el-button--danger el-button--mini is-disabled"
                        style="width: 100px; margin-top: 10px;" type="button"
                        data-v-49055fb4=""><!----><!----><span>批量删除
    </span></button>
            </div>
            <div align="right" class="el-col el-col-16" data-v-49055fb4="">
                <div class="el-pagination is-background" data-v-49055fb4="">
                    <button disabled="disabled" class="btn-prev" type="button"><i
                            class="el-icon el-icon-arrow-left"></i></button>
                    <ul class="el-pager">
                        <li class="number active">1</li><!---->
                        <li class="number">2</li>
                        <li class="number">3</li>
                        <li class="number">4</li>
                        <li class="number">5</li>
                        <li class="number">6</li>
                        <li class="el-icon more btn-quicknext el-icon-more"></li>
                        <li class="number">293</li>
                    </ul>
                    <button class="btn-next" type="button"><i
                            class="el-icon el-icon-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DrugAdministration"
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <div class="el-input el-input--mini" data-v-49055fb4="">
                    <input class="el-input__inner" type="text"
                           placeholder="请输入常数类别编码或名称" autocomplete="off"><!---->
                </div>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <button class="el-button el-button--primary el-button--mini"
                        style="margin-left: 10px;" type="button" data-v-49055fb4="">
                    <i class="el-icon-view"></i><span>查询常数类别</span></button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <button class="el-button el-button--primary el-button--mini"
                        style="margin-left: 10px;" type="button" data-v-49055fb4="">
                    <i class="el-icon-edit"></i><span>新增常数类别</span></button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <button class="el-button el-button--primary el-button--mini"
                        style="margin-left: 10px;" type="button" data-v-49055fb4="">
                    <i class="el-icon-edit"></i><span>常数项管理</span></button>
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
                            <div class="cell">科室编号</div>
                        </th>
                        <th class="el-table_3_column_20  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">科室名称</div>
                        </th>
                        <th class="el-table_3_column_21  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">科室分类</div>
                        </th>
                        <th class="el-table_3_column_22  is-left   is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">科室类型</div>
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
                                    type="checkbox" value=""></span></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">XEEBHK</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">小儿耳鼻喉科</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">儿科</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">临床</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>删除
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
                                    type="checkbox" value=""></span></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">XEXNK</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">小儿心内科</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">儿科</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">临床</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>删除
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
                                    type="checkbox" value=""></span></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">XEKFK</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">小儿康复科</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">儿科</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">临床</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>删除
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
                                    type="checkbox" value=""></span></label>
                            </div>
                        </td>
                        <td class="el-table_3_column_19 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">XENFMK</div>
                        </td>
                        <td class="el-table_3_column_20 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">小儿内分泌科</div>
                        </td>
                        <td class="el-table_3_column_21 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">儿科</div>
                        </td>
                        <td class="el-table_3_column_22 is-left " rowspan="1"
                            colspan="1">
                            <div class="cell">临床</div>
                        </td>
                        <td class="el-table_3_column_26 is-center " rowspan="1"
                            colspan="1">
                            <div class="cell">
                                <button class="el-button el-button--primary el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                   <span>编辑
          </span></button>
                                <button class="el-button el-button--danger el-button--mini"
                                        type="button" data-v-49055fb4=""><!---->
                                    <span>删除
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
                        data-v-49055fb4=""><span>批量删除
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
                        <li class="number">10</li>
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
        name: "OfficeManagement"
    }
</script>

<style scoped>

</style>
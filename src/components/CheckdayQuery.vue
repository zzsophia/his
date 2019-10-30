<template>
    <div>
        <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>统计时间从:</font>&nbsp;
        <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
             style="width: 130px;">
            <el-date-picker type="date" placeholder="选择日期" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
            <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
        </div>
        <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--time"
             style="width: 130px;">
            <el-time-picker placeholder="任意时间点" style="width:133px;height:20px;"></el-time-picker>
        </div>&nbsp;&nbsp;

        <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>到:</font>&nbsp;
        <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
             style="width: 130px;">
            <el-date-picker type="date" placeholder="选择日期" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
            <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
        </div>
        <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--time"
             style="width: 130px;">
            <el-time-picker placeholder="任意时间点" style="width:133px;height:20px;"></el-time-picker>
        </div>&nbsp;&nbsp;

        <button class="el-button el-button--primary el-button--mini"
                style="margin-left: 3px;" type="button"><!----><i
                class="el-icon-search"></i><span>查询</span></button>
        <br><br>
        <table bgcolor="#990033" border="0" cellspacing="1">
            <tr valign="top">
                <td width="200" bgcolor="#fff">
                    <div class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                         style="width: 100%;">
                        <div class="hidden-columns">
                            <div></div>
                            <div></div>
                        </div>
                        <div class="el-table__header-wrapper">
                            <table class="el-table__header" style="width: 200px;" border="0"
                                   cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col width="100" name="el-table_5_column_21">
                                    <col width="100" name="el-table_5_column_22">
                                    <col width="0" name="gutter">
                                </colgroup>
                                <thead class="has-gutter">
                                <tr>
                                    <th class="el-table_5_column_21  is-center   is-leaf"
                                        rowspan="1" colspan="1">
                                        <div class="cell">收款员</div>
                                    </th>
                                    <th class="el-table_5_column_22  is-center   is-leaf"
                                        rowspan="1" colspan="1">
                                        <div class="cell">日结日期</div>
                                    </th>
                                    <th class="gutter"
                                        style="width: 0px; display: none;"></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="el-table__body-wrapper is-scrolling-left">
                            <table class="el-table__body" style="width: 200px;" border="0"
                                   cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col width="100" name="el-table_5_column_21">
                                    <col width="100" name="el-table_5_column_22">
                                </colgroup>
                                <tbody>
                                <tr class="el-table__row">
                                    <td class="el-table_5_column_21 is-center " rowspan="1"
                                        colspan="1">
                                        <div class="cell">张三</div>
                                    </td>
                                    <td class="el-table_5_column_22 is-center " rowspan="1"
                                        colspan="1">
                                        <div class="cell">2018-12-12</div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td class="el-table_5_column_21 is-center " rowspan="1"
                                        colspan="1">
                                        <div class="cell">李四</div>
                                    </td>
                                    <td class="el-table_5_column_22 is-center " rowspan="1"
                                        colspan="1">
                                        <div class="cell">2018-12-13</div>
                                    </td>
                                </tr></tbody>
                            </table></div>
                        <div class="el-table__column-resize-proxy"
                             style="display: none;"></div>
                    </div>
                </td>
                <td width="750" bgcolor="#fff">
                    <div class="el-tabs el-tabs--top el-tabs--border-card">
                        <div class="el-tabs__header is-top">
                            <div class="el-tabs__nav-wrap is-top">
                                <div class="el-tabs__nav-scroll">
                                    <div class="el-tabs__nav is-top" role="tablist"
                                         style="transform: translateX(0px);">
                                        <div tabindex="0"
                                             class="el-tabs__item is-top is-active"
                                             id="tab-0" role="tab" aria-selected="true"
                                             aria-controls="pane-0">日结单
                                        </div>
                                        <div tabindex="-1" class="el-tabs__item is-top"
                                             id="tab-1" role="tab" aria-controls="pane-1">
                                            发票信息
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="el-tabs__content">
                            <div class="el-tab-pane" id="pane-0" role="tabpanel"
                                 aria-labelledby="tab-0"><font
                                    style='font-family: "Microsoft YaHei"; font-size: 15px;'>
                                门诊收费日结单</font>&nbsp;

                                <table bgcolor="#990033" border="0" cellspacing="1">
                                    <tr bgcolor="#fff">
                                        <td>日结时间范围</td>
                                        <td colspan="12"></td>
                                    </tr>
                                    <tr bgcolor="#fff">
                                        <td>制表人</td>
                                        <td colspan="3">张三</td>
                                        <td>收款员</td>
                                        <td colspan="5">张三</td>
                                        <td>制表时间</td>
                                        <td colspan="2">2018-12-30</td>
                                    </tr>
                                    <tr bgcolor="#fff">
                                        <td>起止发票号</td>
                                        <td colspan="11">10001----83455</td>
                                    </tr>
                                    <tr bgcolor="#fff">
                                        <td>作废发票号</td>
                                        <td colspan="11">10003 70048 81890</td>
                                    </tr>
                                    <tr bgcolor="#fff">
                                        <td>重打发票号</td>
                                        <td colspan="11">12997</td>
                                    </tr>
                                    <tr bgcolor="#fff">
                                        <td>收费金额</td>
                                        <td>挂号费</td>
                                        <td>500.00</td>
                                        <td>药费</td>
                                        <td>1000.00</td>
                                        <td>其他费用</td>
                                        <td colspan="7">30.00</td>
                                    </tr>
                                    <tr bgcolor="#fff">
                                        <td>共计</td>
                                        <td>(大写)</td>
                                        <td colspan="4">壹仟伍佰叁拾</td>
                                        <td>(小写)</td>
                                        <td colspan="6">1530.00</td>
                                    </tr>
                                </table>
                                <v-searchinput1></v-searchinput1>
                            </div>
                            <div class="el-tab-pane" id="pane-1" role="tabpanel"
                                 aria-hidden="true" aria-labelledby="tab-1"
                                 style="display: none;">
                                <div class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                                     style="width: 100%;">
                                    <div class="hidden-columns">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="el-table__header-wrapper">
                                        <table class="el-table__header"
                                               style="width: 850px;" border="0"
                                               cellspacing="0" cellpadding="0">
                                            <colgroup>
                                                <col width="150"
                                                     name="el-table_6_column_23">
                                                <col width="100"
                                                     name="el-table_6_column_24">
                                                <col width="100"
                                                     name="el-table_6_column_25">
                                                <col width="100"
                                                     name="el-table_6_column_26">
                                                <col width="100"
                                                     name="el-table_6_column_27">
                                                <col width="100"
                                                     name="el-table_6_column_28">
                                                <col width="100"
                                                     name="el-table_6_column_29">
                                                <col width="100"
                                                     name="el-table_6_column_30">
                                                <col width="0" name="gutter">
                                            </colgroup>
                                            <thead class="has-gutter">
                                            <tr>
                                                <th class="el-table_6_column_23  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">单据号</div>
                                                </th>
                                                <th class="el-table_6_column_24  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">病例号</div>
                                                </th>
                                                <th class="el-table_6_column_25  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">姓名</div>
                                                </th>
                                                <th class="el-table_6_column_26  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">发票总额</div>
                                                </th>
                                                <th class="el-table_6_column_27  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">结算类别</div>
                                                </th>
                                                <th class="el-table_6_column_28  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">状态</div>
                                                </th>
                                                <th class="el-table_6_column_29  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">自费支付</div>
                                                </th>
                                                <th class="el-table_6_column_30  is-center   is-leaf"
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">账户支付</div>
                                                </th>
                                                <th class="gutter"
                                                    style="width: 0px; display: none;"></th>
                                            </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="el-table__body-wrapper is-scrolling-left">
                                        <table class="el-table__body" style="width: 850px;"
                                               border="0" cellspacing="0" cellpadding="0">
                                            <colgroup>
                                                <col width="150"
                                                     name="el-table_6_column_23">
                                                <col width="100"
                                                     name="el-table_6_column_24">
                                                <col width="100"
                                                     name="el-table_6_column_25">
                                                <col width="100"
                                                     name="el-table_6_column_26">
                                                <col width="100"
                                                     name="el-table_6_column_27">
                                                <col width="100"
                                                     name="el-table_6_column_28">
                                                <col width="100"
                                                     name="el-table_6_column_29">
                                                <col width="100"
                                                     name="el-table_6_column_30">
                                            </colgroup>
                                            <tbody>
                                            <tr class="el-table__row">
                                                <td class="el-table_6_column_23 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">20190100001</div>
                                                </td>
                                                <td class="el-table_6_column_24 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">mt90001</div>
                                                </td>
                                                <td class="el-table_6_column_25 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">张三</div>
                                                </td>
                                                <td class="el-table_6_column_26 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">67.9</div>
                                                </td>
                                                <td class="el-table_6_column_27 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">自费</div>
                                                </td>
                                                <td class="el-table_6_column_28 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">有效</div>
                                                </td>
                                                <td class="el-table_6_column_29 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">67.9</div>
                                                </td>
                                                <td class="el-table_6_column_30 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">0</div>
                                                </td>
                                            </tr>
                                            <tr class="el-table__row">
                                                <td class="el-table_6_column_23 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">20190100002</div>
                                                </td>
                                                <td class="el-table_6_column_24 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">mt90002</div>
                                                </td>
                                                <td class="el-table_6_column_25 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">李四</div>
                                                </td>
                                                <td class="el-table_6_column_26 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">14.5</div>
                                                </td>
                                                <td class="el-table_6_column_27 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">医保</div>
                                                </td>
                                                <td class="el-table_6_column_28 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">重打</div>
                                                </td>
                                                <td class="el-table_6_column_29 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">14.5</div>
                                                </td>
                                                <td class="el-table_6_column_30 is-center "
                                                    rowspan="1" colspan="1">
                                                    <div class="cell">0</div>
                                                </td>
                                            </tr></tbody>
                                        </table></div>
                                    <div class="el-table__column-resize-proxy"
                                         style="display: none;"></div>
                                </div>
                                <v-searchinput8></v-searchinput8>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "CheckdayQuery"
    }
</script>

<style scoped>

</style>
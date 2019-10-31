<template>
    <div>
        <form class="el-form demo-form-inline el-form--inline">
            <div class="el-row" style="margin-top: 10px;">
                <div class="el-col el-col-8"><span style="color: red;">*</span>
                    <span style='font-family: "Microsoft YaHei"; font-size: 13px;'>病历号:</span>
                    <div class="el-input el-input--mini" style="width: 200px;">
                        <input class="el-input__inner" type="text"
                                      placeholder="输入病历号" autocomplete="off">
                        </div>
                </div>
                <div class="el-col el-col-8">
                    <div class="el-form-item el-form-item--mini"><label
                            class="el-form-item__label">时间：</label>
                        <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
                             style="width: 130px;">
                            <el-date-picker type="date" placeholder="选择日期" style="width:200px;height:20px;" autocomplete="off"></el-date-picker>
                            <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
                        </div>
                    </div>
                </div>
                <div class="el-col el-col-8">
                    <div class="el-form-item el-form-item--mini">
                        <div class="el-form-item__content">
                            <button class="el-button el-button--primary el-button--mini"
                                    type="button"><span>查询</span>
                            </button></div>
                    </div>
                </div>
            </div>
        </form>
        <div class="el-row" style="background-color: rgb(234, 241, 245);">
            <div class="el-col el-col-24">
                <button disabled="disabled"
                        class="el-button el-icon-success el-button--primary is-disabled"
                        type="button"><span>发药</span></button>
            </div>
        </div>
        <div class="el-table el-table--fit el-table--enable-row-hover el-table--mini"
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
                <table class="el-table__header" style="width: 885px;" border="0"
                       cellspacing="0" cellpadding="0">
                    <colgroup>
                        <col width="55" name="el-table_1_column_1">
                        <col width="200" name="el-table_1_column_2">
                        <col width="80" name="el-table_1_column_3">
                        <col width="50" name="el-table_1_column_4">
                        <col width="100" name="el-table_1_column_5">
                        <col width="100" name="el-table_1_column_6">
                        <col width="160" name="el-table_1_column_7">
                        <col width="140" name="el-table_1_column_8">
                        <col width="0" name="gutter">
                    </colgroup>
                    <thead class="has-gutter">
                    <tr>
                        <th class="el-table_1_column_1   el-table-column--selection  is-leaf"
                            rowspan="1" colspan="1">
                            <div class="cell"><label class="el-checkbox is-disabled"
                                                     role="checkbox"
                                                     aria-disabled="true"><span
                                    class="el-checkbox__input is-disabled"
                                    aria-checked="mixed"><span
                                    class="el-checkbox__inner"></span><input
                                    disabled="disabled" class="el-checkbox__original"
                                    aria-hidden="true" type="checkbox" value=""></span>
                                </label></div>
                        </th>
                        <th class="el-table_1_column_2     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品名称</div>
                        </th>
                        <th class="el-table_1_column_3     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">单价</div>
                        </th>
                        <th class="el-table_1_column_4     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">数量</div>
                        </th>
                        <th class="el-table_1_column_5     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">药品状态</div>
                        </th>
                        <th class="el-table_1_column_6     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">开立医生</div>
                        </th>
                        <th class="el-table_1_column_7     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">处方名称</div>
                        </th>
                        <th class="el-table_1_column_8     is-leaf" rowspan="1"
                            colspan="1">
                            <div class="cell">开立时间</div>
                        </th>
                        <th class="gutter" style="width: 0px; display: none;"></th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="el-table__body-wrapper is-scrolling-none">
                <table class="el-table__body" style="width: 885px;" border="0"
                       cellspacing="0" cellpadding="0">
                    <colgroup>
                        <col width="55" name="el-table_1_column_1">
                        <col width="200" name="el-table_1_column_2">
                        <col width="80" name="el-table_1_column_3">
                        <col width="50" name="el-table_1_column_4">
                        <col width="100" name="el-table_1_column_5">
                        <col width="100" name="el-table_1_column_6">
                        <col width="160" name="el-table_1_column_7">
                        <col width="140" name="el-table_1_column_8">
                    </colgroup>
                </table>
                <div class="el-table__empty-block" style="width: 885px;"><span
                        class="el-table__empty-text">暂无数据</span></div></div>
            <div class="el-table__column-resize-proxy" style="display: none;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dispensing"
    }
</script>

<style scoped>

</style>
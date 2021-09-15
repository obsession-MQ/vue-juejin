<template>
    <div class="sub-view-box">
        <div class="setting-profile-view">
            <h1 class="nav-text">简历管理</h1>
            <span class="desc">仅支持pdf格式，文件大小需小于10M</span>
            <!-- <span class="desc mobile">请前往 PC 端上传简历</span> -->
            <div>
                <div class="byte-upload byte-upload-text">
                    <button class="ui-btn primary medium default">
                        上传简历
                        <input
                            type="file"
                            name="jj_resume"
                            accept=".pdf"
                            class="byte-upload__input"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "rename"
}
</script>
<style lang="scss" scoped>
.sub-view-box {
    position: relative;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    background: #fff;
    width: calc(100% - 254px);
    min-height: 626px;
    .setting-profile-view {
        display: flex;
        align-items: center;
        padding: 0 8px;
        border-bottom: 1px solid #e5e6eb;
    }
    .nav-text {
        font-weight: 600;
        font-size: 24px;
        line-height: 18px;
        color: #333;
        margin-bottom: 20px;
        flex: auto;
        margin-top: 0;
    }
    .desc {
        font-size: 12px;
        line-height: 17px;
        text-align: right;
        color: #86909c;
        margin-right: 16px;
    }
    .byte-upload {
        display: inline-block;
        text-align: center;
        cursor: pointer;
        outline: none;
    }
    .medium {
        padding: 5px 16px;
    }
    .primary {
        background-color: #1d7dfa;
    }
    .ui-btn {
        box-sizing: border-box;
        font-size: 14px;
        line-height: 22px;
        color: #fff;
        border: none;
        white-space: nowrap;
    }
    button {
        outline: none;
        transition: background-color 0.3s, color 0.3s;
        cursor: pointer;
        border-radius: 2px;
    }
    input[type="file"] {
        display: none;
        margin: initial;
        overflow: visible;
    }
}
</style>
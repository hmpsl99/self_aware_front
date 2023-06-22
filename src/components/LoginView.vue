<template>
    <div class="container p-5">
        <img src="../assets/self_aware_1.jpg"/>
    </div>
    <div class="container w-50">
        <form>
            <div class="mb-3">
                <div class="container row">
                    <div class="col">
                        <label for="phone" class="form-label">شماره تلفن</label>
                    </div>
                    <div class="col-9">
                        <input class="form-control" id="phone">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="container row">
                    <div class="col">
                        <label for="password" class="form-label">گذرواژه</label>
                    </div>
                    <div class="col-9">
                        <input type="password" class="form-control" id="password">
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">ورود</button>
        </form>
        <button class="btn btn-warning mt-2">حساب کاربری ندارم</button>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>
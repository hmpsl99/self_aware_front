<template>
    <h1>ارزیابی اولیه</h1>
    <p> برای آشنایی بیشتر با شما نیاز هستش که به چند تا سؤال پاسخ بدین </p>
    <button @click='logout' class="btn btn-secondary m-2">خروج  </button>
    <button class="btn btn-primary m-2">بزن بریم</button>
    <p>{{ this.error }}</p>
    <div class="container p-3">
        <img src="../assets/question.png" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone_number: null,
            password: null,
            user: null,
            error: null,
            loading: false,
        }

    },
    methods: {
        async logout() {
            this.loading = true;
            const rawResponse = await fetch("http://127.0.0.1:8000/user/logout/", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: 'token ' + localStorage.getItem('token')
                },
            });
            this.loading = false;
            if (rawResponse.ok) {
                localStorage.removeItem('token');
                localStorage.removeItem("email");
                localStorage.removeItem("id");
                localStorage.removeItem("phone_number");
                localStorage.removeItem("first_name");
                localStorage.removeItem("last_name");
                localStorage.removeItem("initial_test");
                this.$router.push({ path:'/' });
            } else {
                this.error = console.log('درخواست امکان پذیر نیست')
                console.log(this.error)
            }
        }
    }
}
</script>

<style></style>
<template>
    <div class="container p-5">
        <img src="../assets/self_aware_1.jpg" />
    </div>
    <div class="container w-50">
        <form @submit.prevent="">
            <div class="mb-3">
                <div class="container row">
                    <div class="col">
                        <label for="phone" class="form-label">شماره تلفن</label>
                    </div>
                    <div class="col-9">
                        <input v-model="phone_number" class="form-control" id="phone">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="container row">
                    <div class="col">
                        <label for="password" class="form-label">گذرواژه</label>
                    </div>
                    <div class="col-9">
                        <input v-model="password"  type="password" class="form-control" id="password">
                    </div>
                </div>
            </div>
            <p>{{ error }}</p>
            <p>{{ phone_number }}</p>
            <p> {{ password }}</p>
            <button @click="Login()" type="submit" class="btn btn-primary">ورود</button>
        </form>
        <button class="btn btn-warning mt-2">حساب کاربری ندارم</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone_number: null,
            password: null,
            user: null,
            error: null
        }

    },
    methods: {
        async Login() {
            const rawResponse = await fetch("http://127.0.0.1:8000/user/login/", {
                method: "POST",
                body: JSON.stringify({ phone_number: this.phone_number, password: this.password }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const data = await rawResponse.json();
            this.user = data
            if (rawResponse.ok) {
                localStorage.setItem("user", this.user)
                if (this.user.initial_test == false) {
                    this.$router.push({ path:'/initialtestexp' })
                } else {
                    this.$router.push({ path:'/home' })
                }
            } else {
                this.error = 'یا شماره تلفن یا گذرواژه اشتباه هستند'
            }
        },
    }
}
</script>

<style></style>
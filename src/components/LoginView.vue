<template>
    <div class="container p-5">
        <img src="../assets/self_aware_1.jpg" />
    </div>
    <div v-if="!loading" class="container w-50">
        <form @submit.prevent="">
            <div class="mb-3">
                <div class="row">
                    <div class="col">
                        <div> </div>
                    </div>
                    <div class="col form-floating ">
                        <input v-model="phone_number" class="form-control" id="phone" placeholder="">
                        <label for="phone" >Phone Number</label>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col">
                        <div> </div>
                    </div>
                    <div class="col form-floating">
                        <input v-model="password" type="password" class="form-control" id="password">
                        <label for="password" >Password</label>
                    </div>
                    <div class="col">
                        <p></p>
                    </div>
                </div>
            </div>



        </form>
        <p>{{ error }}</p>
        <button class="btn btn-warning m-2">حساب کاربری ندارم</button>
        <button @click="Login()" type="submit" class="btn btn-primary  m-2">ورود</button>

    </div>


    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
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
            loading: false
        }

    },
    methods: {
        async Login() {
            this.loading = true
            const rawResponse = await fetch("http://127.0.0.1:8000/user/login/", {
                method: "POST",
                body: JSON.stringify({ phone_number: this.phone_number, password: this.password }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            this.loading = false
            const data = await rawResponse.json();
            this.user = data
            if (rawResponse.ok) {
                localStorage.setItem("token", this.user.token);
                localStorage.setItem("email", this.user.email);
                localStorage.setItem("id", this.user.id);
                localStorage.setItem("phone_number", this.user.phone_number);
                localStorage.setItem("first_name", this.user.first_name);
                localStorage.setItem("last_name", this.user.last_name);
                localStorage.setItem("initial_test", this.user.initial_test);

                if (this.user.initial_test == false) {
                    this.$router.push({ path: '/initialtestexp' })
                } else {
                    this.$router.push({ path: '/home' })
                }
            } else {
                this.error = 'یا شماره تلفن یا گذرواژه اشتباه هستند'
            }
        }
    }
}
</script>

<style></style>
<template>
    <modal-layout>
        <template v-slot:header>
            <h1>Popup Title</h1>
        </template>
        <template v-slot:default>
            <p>Popup Contents 1</p>
            <p>Popup Contents 2</p>
        </template>
        <template v-slot:footer>
            <button type="button">Close</button>
        </template>
    </modal-layout>
</template>

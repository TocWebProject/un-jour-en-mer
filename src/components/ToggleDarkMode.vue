<template>
    <div class="toggle-wrapper">
        <label class="toggle">
            <input
                type="checkbox" 
                :checked="(mode === 'dark') ? 'checked' : false"
                @change="$emit('toggle-dark')"
            >
            <span class="toggler round"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: ['mode'], 
}
</script>

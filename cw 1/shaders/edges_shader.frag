#version 430 core

float AMBIENT = 0.2;

uniform vec3 color;
uniform vec3 lightPos;
uniform sampler2D colorTexture;

in vec3 vecNormal;
in vec3 worldPos;
in vec2 vecTex;

out vec4 outColor;
void main()
{
	vec3 lightDir = normalize(lightPos-worldPos);
	vec3 normal = normalize(vecNormal);

	vec4 textureColor = texture(colorTexture, vecTex);
    vec3 sampledColor = textureColor.rgb;


	float diffuse=max(0,dot(normal,lightDir));
	outColor = vec4(0.2+ sampledColor * diffuse, 1.0);
}